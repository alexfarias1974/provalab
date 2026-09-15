import Dexie from 'dexie';

// Inicializa o banco de dados IndexedDB no celular/navegador
export const db = new Dexie('PROVALAB_DB');

// Definição das tabelas com suporte ao ano escolar (6º, 7º, 8º)
db.version(1).stores({
  exams: '++id, grade, subject, difficulty, score, percentage, date'
});

// Migração suave de dados antigos do GeraProvaDB, se existirem
(async () => {
  try {
    const oldExists = await Dexie.exists('GeraProvaDB');
    if (oldExists) {
      const currentCount = await db.exams.count();
      if (currentCount === 0) {
        const oldDb = new Dexie('GeraProvaDB');
        oldDb.version(1).stores({ exams: '++id, subject, difficulty, score, percentage, date' });
        const oldExams = await oldDb.exams.toArray();
        if (oldExams.length > 0) {
          await db.exams.bulkAdd(oldExams.map(item => ({ ...item, grade: item.grade || '6' })));
          console.log(`Migrados ${oldExams.length} registros de GeraProvaDB para PROVALAB_DB com sucesso.`);
        }
        await oldDb.close();
      }
    }
  } catch (e) {
    console.warn('Verificação de migração antiga ignorada:', e);
  }
})();

/**
 * Salva o resultado de uma prova no IndexedDB do dispositivo
 */
export async function saveExamResult(examData) {
  try {
    const id = await db.exams.add({
      ...examData,
      date: examData.date || new Date().toISOString()
    });
    return id;
  } catch (error) {
    console.error('Erro ao salvar prova no IndexedDB:', error);
    throw error;
  }
}

/**
 * Retorna todas as provas ordenadas pela mais recente
 */
export async function getAllExams() {
  try {
    return await db.exams.orderBy('id').reverse().toArray();
  } catch (error) {
    console.error('Erro ao carregar histórico:', error);
    return [];
  }
}

/**
 * Retorna uma prova específica pelo ID
 */
export async function getExamById(id) {
  try {
    return await db.exams.get(Number(id));
  } catch (error) {
    console.error(`Erro ao buscar prova ${id}:`, error);
    return null;
  }
}

/**
 * Exclui uma prova do histórico
 */
export async function deleteExam(id) {
  try {
    await db.exams.delete(Number(id));
    return true;
  } catch (error) {
    console.error(`Erro ao excluir prova ${id}:`, error);
    return false;
  }
}

/**
 * Limpa todo o histórico de provas
 */
export async function clearAllExams() {
  try {
    await db.exams.clear();
    return true;
  } catch (error) {
    console.error('Erro ao limpar histórico:', error);
    return false;
  }
}
