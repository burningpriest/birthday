import './birthday.css'
import himaniImg from './himani.jpg'
export function Birthday() {
  return (
    <div className='card'>
      <div className='imgBox'>
        <div className='bark'></div>
        <img src={himaniImg}/>
      </div>
      <div className='details'>
        <h4 className='color1'>You're not that old! (YET)</h4>
        <h4 className='color2'>(HAPPY BIRTHDAY)</h4>
        <p>Dear Himani,</p>
        <p>I wish we could spend this together</p>
        <p>Nonetheless, come back soon</p>   
        <p>I wanna hug you so badly</p>
        <p>Watch game of thrones together</p>
        <p>Cook you tasty food</p>
        <p>For now party hard:)</p>
        <p class='text-right'>Happy Birthday, Bacche!</p>
        <p class='text-right'>❤Himanshu</p>
      </div>
    </div>
  );
}
