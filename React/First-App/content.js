const style = {
    'backgroundColor':'cyan',
    'height':'10vh',
    'display':'flex',
    'justifyContent':'space-around'
  }
  const Header = (props) => {
    return (<header style = {style}><h4>{props.message}</h4>{props.menu1}</header>);
  };
  const HeroUnit = () =>{
    let clickhandler = ()=>{
      alert('You clicked the click button')
    }
    return (<section style = {{'backgroundColor':'blue','height':'20vh','width':'50%'}}>
      <button onClick = {clickhandler}>click me</button>
      </section>)
  }
  const Empty = (props) =>{
    return (<>
      {props.children}
    </>)
  }
  ReactDOM.render(
    <Empty>
    <Header message="Actalent" menu1="Register" />

    </Empty>,
    document.getElementById("placeholder1")
  );

  ReactDOM.render(
    <Empty>
        <HeroUnit/>
    </Empty>,document.getElementById("placeholder2")
  );