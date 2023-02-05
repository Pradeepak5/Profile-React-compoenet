import "./App.css";

export default function App() {
  const data = [{
    name:"Pradeep",
    img:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name:"Deepak",
    img:"https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }]
  return (
    <div className="App">
      {data.map(({name,img})=>{
        return <Userdata name={name} img={img}/>
      })}
    </div>
  );
}

function Userdata({ name, img }) {
  return (
    <div>
      <img src={img} alt="Profile" />
      <h2>Hello {name}</h2>
    </div>
  );
}
