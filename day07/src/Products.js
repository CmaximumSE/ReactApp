import  {useEffect, useState} from "react";

export default function Products() {
  
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
      fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then(res => res.json())
      .then(data => {
          console.log('네트워크에서 data를 받아옴');
          setProducts(data)
      })

    return () => {
      console.log('클리어 하는 공간');
    };
  }, [checked]);
  const handleChange = () => {
    setChecked(prev =>  !prev);
  }

  return (
    <div>
      <div>
        <input id='checkBox' type='checkbox' value={checked} onChange={handleChange}/>
        <label htmlFor='checkBox'>Show Sale</label>
      </div>
      <ul>
        {products.map(product=>(
            <li key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </li>
        ))}
      </ul>
    </div>
  );
}