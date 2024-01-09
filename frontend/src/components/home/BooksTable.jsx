import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border-none rounded-md bg-violet-200 shadow-2xl'>No</th>
          <th className='border-none rounded-md bg-violet-200'>Título</th>
          <th className='border-none rounded-md bg-violet-200'>
            Gênero
          </th>
          <th className='border-none rounded-md max-md:hidden bg-violet-200'>
            Número de episódios
          </th>
          <th className='border-none rounded-md bg-violet-200'>Operações</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='h-8'>
            <td className='bg-white rounded-md text-center shadow-lg shadow-indigo-500'>
              {index + 1}
            </td>
            <td className='bg-white rounded-md text-center shadow-lg shadow-indigo-500'>
              {book.title}
            </td>
            <td className='bg-white rounded-md text-center shadow-lg shadow-indigo-500'>
              {book.author}
            </td>
            <td className='bg-white rounded-md text-center shadow-lg shadow-indigo-500'>
              {book.publishYear}
            </td>
            <td className='bg-white rounded-md text-center shadow-lg shadow-indigo-500'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
