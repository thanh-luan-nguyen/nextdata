import Link from 'next/link'

export default function ReadMoreButton({ height, width, href }) {
  return (
    <div
      className={`text-white hover:text-nextdata-font-button bg-nextdata-font-button hover:bg-white transition duration-500 mx-auto grid items-center cursor-pointer border border-nextdata-font-button`}
      style={{ height:  height , width:  width  }}
    >
      <Link href={href}>
        <a className=''>READ MORE</a>
      </Link>
    </div>
  )
}
