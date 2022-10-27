import './birthday.css';
import himaniImg from './himani.jpg';
import signImg from './signTransparent.png';
export function Birthday() {
  return (
    <div className='card'>
      <div className='imgBox'>
        <div className='bark'></div>
        <img src={himaniImg} />
      </div>
      <div className='details'>
        <p>Dear Himani,</p>
        <p>I wish we could spend this together</p>
        <p>Nonetheless, its just one birthday</p>
        <p>abhi bahut sare sath manane hein</p>
        <p>ek bar wapis aja, </p>
        <p>I wanna hug you so badly</p>
        <p>Watch game of thrones together</p>
        <p>Cook you tasty food</p>
        <p>aur tere hath ke paranthe, muaahh...</p>
        <p>For now party hard :)</p>
        <p>jaldi milte hein</p>
        <p class='text-right'>Happy Birthday, Bacche!</p>
        <p class='text-right bigger'>
          ❤<img src={signImg} width={80} height={20} />
        </p>
      </div>
    </div>
  );
}
