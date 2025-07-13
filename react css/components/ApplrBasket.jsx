const ApplrBasket = ({applecount, basketname}) => {
  return (
    <div className='basket'>
        <h1>
            <span>{applecount}</span>apples
        </h1>
        <p>{basketname}{applecount===10 && '(full)'}{applecount===0 && '(empty)'}</p>  
    </div>
  )
}
export default ApplrBasket

//  /*using && operator*/ {applecount===10 ? '(full)':'(not full)'}