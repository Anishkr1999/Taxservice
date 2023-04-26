import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { blogList } from '../../blogpost';
import { Link } from 'react-router-dom';
import Chip from '../../Component/Chip';
import EmptyList from '../../Component/Empty';
import './blogs.css'
import {Helmet} from 'react-helmet';

const Blogs = () => {

  const {id} = useParams();
  
  const [blog,setBlog]=useState(null)

  useEffect(()=>{
    let blog =blogList.find(blog=>blog.id===parseInt(id));
    if(blog){
      setBlog(blog) 
    }
  },[id])
  return (
    <>
     <Helmet>
  <title>{blog.metaTitle}</title>
  <meta
   name="description"
   content='GEt info for fav blogs'

  />
</Helmet>
    <section>
<Link to='/' className="blog-goback"><span>-</span> Go Back</Link>

{
  blog?(<div className="blog-wrap">
    <header>
      <p className='blog-date'>Published {blog.createdAt}</p>
      
      <h1>{blog.title}</h1>
      <h4>{blog.titleOne}</h4>
      <div className='blog-subCategory'>
        {blog.subCategory.map(( category,index)=>(
          <div><Chip key={index} label={category}/></div>))}
      </div>
    </header>
    <img src={blog.covers} alt="cover"/>
    <p className="blog-desc">{blog.discription}</p>
    
      <h3>{blog.first}</h3>
      <p>{blog.firstone}</p>
      <p>{blog.firsttwo}</p>
      <p>{blog.firstthree}</p>
      <p>{blog.firstfour}</p>
      <p>{blog.firstfive}</p>
      <p>{blog.firstsix}</p>
      <p>{blog.firstseven}</p>
      <p>{blog.firsteight}</p>
      <p>{blog.firstnine}</p>
      <p>{blog.firstten}</p>

      {/*========================= Second ================*/}
      <h3>{blog.second}</h3>
      <p>{blog.secone}</p>
      <p>{blog.sectwo}</p>
      <p>{blog.secthree}</p>
      <p>{blog.secfour}</p>
      <p>{blog.secfive}</p>
      <p>{blog.secsix}</p>
      <p>{blog.secseven}</p>
      <p>{blog.seceight}</p>
      <p>{blog.secnine}</p>
      <p>{blog.secten}</p>

      {/* =====Threee===================================== */}
      <h3>{blog.third}</h3>
      <p>{blog.thirdone}</p>
      <p>{blog.thirdtwo}</p>
      <p>{blog.thirdthree}</p>
      <p>{blog.thirdfour}</p>
      <p>{blog.thirdfive}</p>
      <p>{blog.thirdsix}</p>
      <p>{blog.thirdseven}</p>
      <p>{blog.thirdeight}</p>
      <p>{blog.thirdnine}</p>
      {/* ===============Forth======== */}
      <h3>{blog.forth}</h3>
      <p>{blog.forthone}</p>
      <p>{blog.forthtwo}</p>
      <p>{blog.forththree}</p>
      <p>{blog.forthfour}</p>
      <p>{blog.forthfive}</p>
      <p>{blog.forthsix}</p>
      <p>{blog.forthseven}</p>
      <p>{blog.fortheight}</p>
      <p>{blog.forthnine}</p>

      {/* =============fifth========================= */}

      <h3>{blog.fifth}</h3>
      <p>{blog.fifthone}</p>
      <p>{blog.fifthtwo}</p>
      <p>{blog.fifththree}</p>
      <p>{blog.fifthfour}</p>
      <p>{blog.fifthfive}</p>
      <p>{blog.fifthsix}</p>
      <p>{blog.fifthseven}</p>
      <p>{blog.fiftheight}</p>
      <p>{blog.fifthnine}</p>
{/* ================Sixth====================================== */}
      <h3>{blog.sixth}</h3>
      <p>{blog.sixthone}</p>
      <p>{blog.sixthtwo}</p>
      <p>{blog.sixththree}</p>
      <p>{blog.sixthfour}</p>
      <p>{blog.sixthfive}</p>
      <p>{blog.sixthsix}</p>
      <p>{blog.sixthseven}</p>
      <p>{blog.sixtheight}</p>
      <p>{blog.sixthnine}</p>
      {/* ========seventh========================================== */}
      <h3>{blog.seventh}</h3>
      <p>{blog.seventhone}</p>
      <p>{blog.seventhtwo}</p>
      <p>{blog.sevenththree}</p>
      <p>{blog.seventhfour}</p>
      <p>{blog.seventhfive}</p>
{/* ===================eighth===================================== */}
      <h3>{blog.eighth}</h3>
      <p>{blog.eighthone}</p>
      <p>{blog.eighthtwo}</p>
      <p>{blog.eighththree}</p>
      <p>{blog.eighthfour}</p>
      <p>{blog.eighthfive}</p>
      <p>{blog.eighthsix}</p>
      <p>{blog.eighthseven}</p>
      <p>{blog.eightheight}</p>
      <p>{blog.eighthnine}</p>
{/* ====================nine================================== */}

      <h3>{blog.ninth}</h3>
      <p>{blog.ninthone}</p>
      <p>{blog.ninthtwo}</p>
      <p>{blog.ninththree}</p>
      <p>{blog.ninthfour}</p>
      <p>{blog.ninthfive}</p>

      {/* =============tenth======================================= */}
      <h3>{blog.tenth}</h3>
      <p>{blog.tenthone}</p>
      <p>{blog.tenthtwo}</p>
      <p>{blog.tenththree}</p>
      <p>{blog.tenthfour}</p>
      <p>{blog.tenthfive}</p>
      <p>{blog.tenthsix}</p>
      <p>{blog.tenthseven}</p>
      <p>{blog.tentheight}</p>
      <p>{blog.tenthnine}</p>

      {/* ==============eleven============================ */}
      <h3>{blog.eleven}</h3>
      <p>{blog.elevenone}</p>
      <p>{blog.eleventwo}</p>
      <p>{blog.eleventhree}</p>
      <p>{blog.elevenfour}</p>
      <p>{blog.elevenfive}</p>
      <p>{blog.elevensix}</p>
      <p>{blog.elevenseven}</p>
      <p>{blog.eleveneight}</p>
      <p>{blog.elevennine}</p>

      {/* ===============twelve===================================== */}
      <h3>{blog.twelve}</h3>
      <p>{blog.twelveone}</p>
      <p>{blog.twelvetwo}</p>
      <p>{blog.twelvethree}</p>
      <p>{blog.twelvefour}</p>
      <p>{blog.twelvefive}</p>
      <p>{blog.twelvesix}</p>
      <p>{blog.twelveseven}</p>
      <p>{blog.twelveeight}</p>
      <p>{blog.twelvenine}</p>

      {/* =============thirteen===================================== */}
      <h3>{blog.thirteen}</h3>
      <p>{blog.thirteenone}</p>
      <p>{blog.thirteentwo}</p>
      <p>{blog.thirteenthree}</p>
      <p>{blog.thirteenfour}</p>
      <p>{blog.thirteenfive}</p>
      <p>{blog.thirteensix}</p>
      {/* =============fourteen========================== */}
      <h3>{blog.fourteen}</h3>
      <p>{blog.fourteenone}</p>
      <p>{blog.fourteentwo}</p>
      <p>{blog.fourteenthree}</p>
      <p>{blog.fourteenfour}</p>
      <p>{blog.fourteenfive}</p>
      <p>{blog.fourteensix}</p>
      <p>{blog.fourteenseven}</p>
      <p>{blog.fourteeneight}</p>

      {/* Fifteen */}
      <h3>{blog.fifteen}</h3>
      <p>{blog.fifteenone}</p>
      <p>{blog.fifteentwo}</p>
      <p>{blog.fifteenthree}</p>
      <p>{blog.fifteenfour}</p>
      <p>{blog.fifteenfive}</p>
      <p>{blog.fifteensix}</p>
      <p>{blog.fifteenseven}</p>
      <p>{blog.fifteeneight}</p>

      {/* =============sixteen====================== */}
      <h3>{blog.sixteen}</h3>
      <p>{blog.sixteenone}</p>
      <p>{blog.sixteentwo}</p>
      <p>{blog.sixteenthree}</p>
      <p>{blog.sixteenfour}</p>
      <p>{blog.sixteenfive}</p>
      <p>{blog.sixteensix}</p>
      <p>{blog.sixteenseven}</p>
      <p>{blog.sixteeneight}</p>
      <p>{blog.sixteennine}</p>
      <p>{blog.sixteenten}</p>
      <p>{blog.sixteentwelve}</p>
      <p>{blog.sixteenthirteen}</p>
      <p>{blog.sixteenfourteen}</p>
      {/* ===========seventeen============================== */}
      <h3>{blog.seventeen}</h3>
      <p>{blog.seventeenone}</p>
      <p>{blog.seventeentwo}</p>
      <p>{blog.seventeenthree}</p>
      <p>{blog.seventeenfour}</p>
      <p>{blog.seventeenfive}</p>

      {/* ===========eighteen============================ */}
      <h3>{blog.eighteen}</h3>
      <p>{blog.eighteenone}</p>
      <p>{blog.eighteentwo}</p>
      <p>{blog.eighteenthree}</p>
      <p>{blog.eighteenfour}</p>
      <p>{blog.eighteenfive}</p>
      <p>{blog.eighteensix}</p>
      <p>{blog.eighteenseven}</p>
      <p>{blog.eighteeneight}</p>
      <p>{blog.eighteennine}</p>

      {/* ==============Ninteen============================================= */}
      <h3>{blog.ninteen}</h3>
      <p>{blog.ninteenone}</p>
      <p>{blog.ninteentwo}</p>
      <p>{blog.ninteenthree}</p>
      <p>{blog.ninteenfour}</p>

      {/* ==================Twenty======================================= */}
      <h3>{blog.twenty}</h3>
      <p>{blog.twentyA}</p>
      <p>{blog.twentyB}</p>
      <p>{blog.twentyC}</p>
      <p>{blog.twentyD}</p>
      <p>{blog.twentyE}</p>

      {/* ====================TwentyOne==================== */}
      <h3>{blog.twentyOne}</h3>
      <p>{blog.twentyOneA}</p>
      <p>{blog.twentyOneB}</p>
      <p>{blog.twentyOneC}</p>
      <p>{blog.twentyOneD}</p>
      <p>{blog.twentyOneE}</p>

  {/* ================= twentytwo========================= */}
     <h3>{blog.twentyTwo}</h3>
     <p>{blog.twentyTwoA}</p>
     <p>{blog.twentyTwoB}</p>
     <p>{blog.twentyTwoC}</p>
     <p>{blog.twentyTwoD}</p>
     <p>{blog.twentyTwoE}</p>
     <p>{blog.twentyTwoF}</p>


     {/* ======================    twentyThree========================================================== */}
     <h3>{blog.twentyThree}</h3>
     <p>{blog.twentyThreeA}</p>

{/* ===========================twentyFour======================================================= */}
 <h3>{blog.twentyFour}</h3>
<p>{blog.twentyFourA}</p>

 <table>
  <tr>
    <th>{blog.twentyFourAHead}</th>
    <th>{blog.twentyFourBHead}</th>
  </tr>
<tr>
  <td>{blog.twentyFourArow}</td>
  <td>{blog.twentyFourBrow}</td>
</tr>
<tr>
  <td>{blog.twentyFourCrow}</td>
  <td>{blog.twentyFourDrow}</td>
</tr>
<tr>
  <td>{blog.twentyFourErow}</td>
  <td>{blog.twentyFourFrow}</td>
</tr>
<tr>
  <td>{blog.twentyFourGrow}</td>
  <td>{blog.twentyFourHrow}</td>
</tr>
<tr>
  <td>{blog.twentyFourIrow}</td>
  <td>{blog.twentyFourJrow}</td>
</tr>
<tr>
  <td>{blog.twentyFourKrow}</td>
  <td>{blog.twentyFourLrow}</td>
</tr>
<tr>
  <td>{blog.twentyFourMrow}</td>
  <td>{blog.twentyFourNrow}</td>
</tr>

</table> 
<p>{blog.twentyFourB}</p>
<p>{blog.twentyFourC}</p>

{/* ==================TwentyFive======================= */}
     <h3>{blog.twentyFive}</h3>
     <p>{blog.twentyFiveA}</p>

     {/* ============ twentySix=========================== */}
<h3>{blog.twentySix}</h3>
<p>{blog.twentySixA}</p>



<table>
  <tr>
    <th>{blog.twentySixAHead}</th>
    <th>{blog.twentySixBHead}</th>
  </tr>
<tr>
  <td>{blog.twentySixArow}</td>
  <td>{blog.twentySixBrow}</td>
</tr>
<tr>
  <td>{blog.twentySixCrow}</td>
  <td>{blog.twentySixDrow}</td>
</tr>
<tr>
  <td>{blog.twentySixErow}</td>
  <td>{blog.twentySixFrow}</td>
</tr>
<tr>
  <td>{blog.twentySixGrow}</td>
  <td>{blog.twentySixHrow}</td>
</tr>
<tr>
  <td>{blog.twentySixIrow}</td>
  <td>{blog.twentySixJrow}</td>
</tr>

</table> 

{/* ====================twentySeven=============================================================== */}








  </div>

  ):(

  <EmptyList/>
  )
}
    </section> 
    </>
  )
}

export default Blogs