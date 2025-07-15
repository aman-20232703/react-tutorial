const ApplrBasket = ({applecount, basketname}) => {
  return (
    <div className='basket'>
        <h1>
            <span>{applecount}</span>apples
        </h1>
        <p>{basketname}</p>
    </div>
  )
}
export default ApplrBasket
