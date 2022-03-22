export const fetchFormById = async (formId, db) => {
  const form = await db.collection('forms').doc(formId).get();

  if (form.exists) {
    return {
      id: form.id,
      exists: true,
      ...form.data(),
    };
  }
  return {
    id: null,
    exists: false,
  };
};

export default { fetchFormById };
