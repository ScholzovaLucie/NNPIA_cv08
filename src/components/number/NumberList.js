import { useState } from "react";

export default function NumberList() {
    const numbers = [1, 2, 3, 4, 5];
    const days = ['pondělí', 'úterý', 'středa', 'čtvrte', 'pátek']
    const [day, setDay] = useState('');

    const handleMouseEnter = (e) => {
        setDay(days[e.currentTarget.dataset.key - 1]);
      };

      const handleMouseLeave = () => {
        setDay('');
    };
  
    return (
        <>
      <table>
        <tbody className="numberList">
          {numbers.map((number) => (
            <tr key={number} data-key={number} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <td>{number}</td>
            </tr>
          ))}
        </tbody>
        {
        day !== '' &&  day
      }
      </table>
      
</>
    );
  }