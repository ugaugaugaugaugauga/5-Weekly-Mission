const FolderIdPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className='pt-20 h-[100vh] flex justify-center items-center'>
      <h1 className='text-5xl font-bold'>
        Folder id: <span className='text-red-500'>{params.id}</span>
      </h1>
    </div>
  )
}

export default FolderIdPage
