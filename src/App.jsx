import './App.css'
import data from './assets/data.json'
import background from '/images/bg-header-desktop.svg'
import cross from '/images/icon-remove.svg'
import {useState} from "react"



function Item({ key, image, company, position, postTime, contract, location, languages, tools, role, level, new_offer, featured, setFilterActive, filterActive }) {

  
  return (
    <div className='container' key={key}>
      <div className='image_container'> <img src={image} alt='error' /></div>
      <div className='text_container'>

        <div className='company'>
          <p className='name'>{company}</p>
          {
            new_offer ? (<div className='new'>NEW!</div>) : null
          }
          {
            featured ? (<div className='ft'>FEATURED</div>) : null
          }
            
        </div>

        <div className='job_need'>
          <p className='position'  onClick={()=>setFilterActive(true)}>{position}</p>

          <div className='language'>
            <div className='role'  onClick={()=>setFilterActive(true)}>{role}</div>
            <div className='level'>{level}</div>

            {tools.map((elt, i) => (
              <div className='tools' key={`tool-${i}`} onClick={()=>setFilterActive(true)}>{elt}</div>
            ))}



            {languages.map((elt, i) => (
              <button className='lang'  onClick={()=>setFilterActive(true)} key={`lang-${i}`}>{elt}</button>
            ))}

          </div>
        </div>

        <div className='info'>
          {postTime} - {contract} - {location}
        </div>
      </div>
    </div>
  )
}


function Filter(){
 const   filterData = [];
  for(let item of data){
    console.log(item)
     filterData.push(item.languages);
  }
 // console.log(filterData);


  return(

    //for the flter you need to use a filter funtion on map or 
        <div className='filter'>
        <div className='language'>
          <div className='lang'>frontend<button> <img src={cross} alt='error'  /></button></div>
          <div className='lang'>CSS<button><img src={cross} alt='error'  /></button></div>
          <div className='lang'>Javascript<button><img src={cross} alt='error'  /></button></div>
        </div>
        <div className='clear'>clear</div>
      </div>
  )
}




function App() {
  
const [filterActive, setFilterActive] = useState(false);

  return (
    <div>
      <img src={background} alt='error' style={{ backgroundColor: " hsl(180, 29%, 50%)" }} />
      {filterActive && <Filter />}
      <div className='wrapper'>
        {
          data.map(item => (
              <Item key={item.id} image={item.logo.replace('.', '')} company={item.company} position={item.position} languages={item.languages} postTime={item.postedAt} contract={item.contract}
                location={item.location} tools={item.tools} role={item.role} level={item.level} new_offer={item.new} featured={item.featured} setFilterActive={setFilterActive} filterActive={filterActive}/>))
        }
      </div>
    </div>

  )
}

export default App
