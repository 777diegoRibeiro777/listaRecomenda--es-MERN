import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
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
      <h1 className='text-3xl my-4 flex items-center justify-center text-white'>Apagar Recomendação</h1>
      {loading ? <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'><Spinner /></div> : ''}
      <div className='flex flex-col items-center rounded-xl w-[600px] p-8 mx-auto  bg-slate-200 shadow-lg shadow-indigo-900'>
        <h3 className='text-2xl'>Tem certeza que quer apagar essa recomendação?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full rounded-full shadow-lg shadow-indigo-500'
          onClick={handleDeleteBook}
        >
          Sim, Apague
        </button>
      </div>
    </div>
  )
}

export default DeleteBook;
