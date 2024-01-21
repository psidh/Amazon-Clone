import Image from 'next/image';
export default function Logo() {
  return (
    <div>
      <a href='/'>
          <Image src={'/amazon-icons/amazon.png'} width={80} height={10} alt='amazon logo' />
        </a>
    </div>
  )
}
