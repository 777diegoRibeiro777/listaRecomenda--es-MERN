import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4 flex items-center justify-center text-white'>Criar Recomendação</h1>
      {loading ? <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'><Spinner /></div> : ''}
      <div className='flex flex-col rounded-xl w-[600px] p-4 mx-auto bg-slate-200 shadow-lg shadow-indigo-900'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-800 flex items-center justify-center'>Título</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 rounded-full w-full shadow-lg shadow-indigo-500 text-center'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-800 flex items-center justify-center'>Gênero</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 rounded-full w-full shadow-lg shadow-indigo-500 text-center'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-800 flex items-center justify-center'>Número de Episódios</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 rounded-full w-full shadow-lg shadow-indigo-500 text-center'
          />
        </div>
        <button className='p-2 bg-lime-500 rounded-full m-8 shadow-lg shadow-indigo-500' onClick={handleSaveBook}>
          Salvar
        </button>
      </div>
    </div>
  );
}

export default CreateBooks