import axios from "axios";

const baseUrl = "http://localhost:3001/notes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const object = { content, important: false };
  const response = await axios.post(baseUrl, object);
  console.log(response.data);
  return response.data;
};

const editNote = async (id) => {
  const data = (await axios.get(baseUrl)).data;
  const data2 = data.find((item) => item.id === id);
  const object = { ...data2, important: !data2.important };
  const response = await axios.put(`${baseUrl}/${id}`, object);
  return response.data;
};

export default { getAll, createNew, editNote };
