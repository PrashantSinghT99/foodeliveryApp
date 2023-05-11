import instamart from '../assests/instamart.png'

const Instamart = () => {
  return (<div className="w-[100%] mt-8">
        <div className="flex flex-col justify-center items-center">
      <div  className='mb-4'>
        <span className='text-blue-dark font-bold text-4xl text-center'>Coming Soon .....</span>
        </div>
        <div>
        <img className="" alt="instamart" src= {instamart} />
        </div>
      </div>
      </div>
  )
}

export default Instamart;