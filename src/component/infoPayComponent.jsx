import Image from 'next/image';
export  function InfoPayComponent({logoList}){
    return(
        <>
        <div className=" flex flex-col">
            <p>Koszt dostawy*</p>
    <ul className="flex flex-col  gap-[16px]">
      {logoList.map((item, idx) => {
        return (
          <li className='flex items-center w-full justify-start' key={idx}>

            <Image
              src={item.src}
              width={item.width}
              height={item.height}
              alt={item.alt}
            />
            <div className='flex items-center w-full justify-between '>

           <p className='flex items-center'> {item.title} </p>
           <p className='flex items-center'> {item.prise}</p>   
          </div>  
          </li>
        );
      })}
    </ul>
  

</div>


        </>

    )
}