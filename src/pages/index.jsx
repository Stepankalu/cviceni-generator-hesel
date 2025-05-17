import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const response = await fetch('https://www.psswrd.net/api/v1/password/?length=12');
const data = await response.json();



document.querySelector('#root').innerHTML = render(
  <div className="container">
      <h1>Webová aplikace</h1>
    
    <p>Vaše heslo je: {data.password}, délka 12</p>
  </div>
);
