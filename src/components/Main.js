import React from "react";
import './style.css'

function ScrollingText() {
    return <div style={{ backgroundColor: "rgba(131, 157, 154, 1)", width: '100%', height: '40px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <p className="hashtag">#buynow</p>
        <p className="hashtag">#вседлядому</p>
        <p className="hashtag">#швидкотазручно</p>
        <p className="hashtag">#buynow</p>
        <p className="hashtag">#вседлядому</p>
        <p className="hashtag">#швидкотазручно</p>
        <p className="hashtag">#buynow</p>
        <p className="hashtag">#вседлядому</p>
        <p className="hashtag">#швидкотазручно</p>
    </div>
}

function SearchBar() {
    return <div className="searchBar">
        <button className="searchButton"><img src="search.png" className="searchImg"></img></button>
        <input type="text" placeholder="Пошук" className="searchInput"></input>
    </div>
}


function Header() {
    return <header style={{ width: '1702px', marginLeft: '94px', marginTop: '6px', display: 'flex', justifyContent: 'space-between' }}>
        <nav style={{ width: '543px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a href="#" style={{ width: '46px' }}>
                <img src="menu.png" style={{ width: '18px', display: 'block', margin: '0 auto' }}></img>
                <p className="headerText" style={{ margin: '0 auto', marginTop: '8px' }}>меню</p>
            </a>
            <img src="logo.png" style={{ width: '112px', cursor: "pointer" }}></img>
            <a href="#" className="headerText">товари</a>
            <a href="#" className="headerText">кімнати</a>
            <a href="#" className="headerText">Дизайн</a>

        </nav>
        <div style={{ width: "484px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ width: "87px" }}>
                <img src="location.png" style={{ width: '16px', display: 'inline-block', marginRight: '14px' }}></img>
                <a href="#" className="headerText" style={{ display: 'inline-block' }}>київ</a>
            </div>
            <div style={{ width: "252px" }}>
                <img src="userIcon.png" style={{ width: '20px', display: 'inline-block', marginRight: '12px' }}></img>
                <p className="headerText" style={{ display: 'inline-block' }}>привіт! <a href="#">увійдіть в систему</a></p>
            </div>
            <div>
                <img src="cart.png" style={{ width: '20px', marginRight: '20px', cursor: "pointer" }}></img>
                <img src="fav.png" style={{ width: '25px', cursor: "pointer" }}></img>
            </div>
        </div>
    </header>
}

class TopCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div style={{ width: '160px', height: '212px', marginTop: '40px', cursor: 'pointer' }} >
            <img src="topIcon.png" style={{ width: '40px', height: '40px', position: 'relative', top: '-13px', left: '133px' }}></img>
            <div style={{ width: '160px', height: '212px', borderRadius: '15px', backgroundColor: 'rgba(255, 255, 255, 1)', marginTop: '-40px' }}>
                <img src={this.props.image} style={{ width: '100%', height: '115px', overflow: 'hidden', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}></img>
                <div style={{ width: '128px', margin: '9px auto 0 auto' }}>
                    <p style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase' }}>{this.props.title}</p>
                    <p style={{ fontSize: '14px', fontWeight: '400', textTransform: 'lowercase' }}>{this.props.category}</p>
                    <p style={{ fontSize: '20px', fontWeight: '800', marginTop: '12px' }}>{this.props.price}</p>
                </div>
            </div></div>
    }

}

export class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="main">
            <ScrollingText></ScrollingText>
            <Header></Header>
            <SearchBar></SearchBar>
            <p className="pageTitle" style={{width: '803px', margin: '57px auto'}}>Все для дому</p>
            <div style={{ width: '640px', marginLeft: '220px'}}>
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-around'}}><button className="createButton">
                    створити акаунт та почати!
                </button>
                    <a className="borderA">каталог <img src="arrowDown.png" style={{ marginLeft: '10px' }}></img></a></div>
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                    <TopCard image="pillow.png" title="подушки" category="спальна кімната..." price="12$"></TopCard>
                    <TopCard image="pillow.png" title="подушки" category="спальна кімната..." price="12$"></TopCard>
                    <TopCard image="pillow.png" title="подушки" category="спальна кімната..." price="12$"></TopCard>
                </div>

                <p style={{ marginTop: '15px' }}>ЛОВИ МОМЕНТ | <span style={{ fontWeight: '600' }}>Знижки до</span> <span style={{ fontWeight: '900', fontSize: '16px' }}>60%</span> на вибрані категорії товарів!</p>

            </div>
        </div>
    }
}