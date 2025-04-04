import React from "react";
import { Link } from 'react-router-dom';
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

export function Products() {
    return <div style={{ padding: '50px' }}>
        <h1>Товари</h1>
        <Link to="/">Повнернутися</Link>
    </div>
}

export function Rooms() {
    return <div style={{ padding: '50px' }}>
        <h1>Кімнати</h1>
        <Link to="/">Повнернутися</Link>
    </div>
}

export function Design() {
    return <div style={{ padding: '50px' }}>
        <h1>Дизайн</h1>
        <Link to="/">Повнернутися</Link>
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
            <Link to="/products" className="headerText">товари</Link>
            <Link to="rooms" className="headerText">кімнати</Link>
            <Link to="design" className="headerText">Дизайн</Link>

        </nav>
        <div style={{ width: "484px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ width: "87px" }}>
                <img src="location.png" style={{ width: '16px', display: 'inline-block', marginRight: '14px' }}></img>
                <a href="#" className="headerText" style={{ display: 'inline-block' }}>київ</a>
            </div>
            <div style={{ width: "252px" }}>
                <img src="userIcon.png" style={{ width: '20px', display: 'inline-block', marginRight: '12px' }}></img>
                <p className="headerText" style={{ display: 'inline-block' }}><Link to="/login">привіт! увійдіть в систему</Link></p>
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

function SmallFindCard(props) {
    return <Link to="/" style={{ display: 'flex', alignItems: 'flex-end', height: '400px', width: `${props.w}px`, backgroundImage: `url(${props.image})`, borderRadius: '15px', marginTop: '20px' }}>
        <div style={{ width: '100%', height: '80px', backgroundColor: '#B6C3C2', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ fontSize: '24px', fontWeight: '500', textTransform: 'uppercase', textAlign: 'center', width: '781px' }}>{props.text}</p>
            <img src='nextIcon.png' className="arrowIcon" style={{ position: 'relative', top: '0', left: '-20px' }}></img>
        </div>

    </Link>
}

function BigFIndCard(props) {
    return <Link to="/" style={{ display: 'flex', height: '364px', width: '100%', backgroundImage: `url(${props.image})`, borderRadius: '15px', justifyContent: 'flex-end', marginTop: '20px' }}>
        <div style={{ height: '100%', width: '80px', backgroundColor: '#B6C3C2', borderBottomRightRadius: '15px', borderTopRightRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src='nextIcon.png' className="arrowIcon"></img>
        </div>
    </Link>
}

function SmallCard(props) {
    return <Link to='/' style={{ display: 'flex', height: '286px', width: '219px', marginRight: '20px', marginTop: "20px", borderRadius: '15px', backgroundImage: `url(${props.image})`, justifyContent: 'center', alignItems: 'flex-end', flexShrink: 0 }}>
        <a href="#" className="smallCardBtn">назва набору</a>
    </Link>
}

export class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <>
            <section style={{ height: '1026px', width: '100%', margin: '0', backgroundImage: "url('mainBackground.png')", backgroundRepeat: 'no-repeat' }}>
                <ScrollingText></ScrollingText>
                <Header></Header>
                <SearchBar></SearchBar>
                <h1 className="pageTitle" style={{ width: '803px', margin: '57px auto' }}>Все для дому</h1>
                <div style={{ width: '640px', marginLeft: '220px' }}>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}><button className="createButton">
                        <Link to="/signup" style={{ textTransform: 'uppercase', color: 'rgba(255, 255, 255, 1)', fontSize: '16px', fontWeight: '600' }}>створити акаунт та почати!</Link>
                    </button>
                        <a className="borderA">каталог <img src="arrowDown.png" style={{ marginLeft: '10px' }}></img></a></div>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                        <TopCard image="pillow.png" title="подушки" category="спальна кімната..." price="12$"></TopCard>
                        <TopCard image="pillow.png" title="подушки" category="спальна кімната..." price="12$"></TopCard>
                        <TopCard image="pillow.png" title="подушки" category="спальна кімната..." price="12$"></TopCard>
                    </div>

                    <p style={{ marginTop: '15px' }}>ЛОВИ МОМЕНТ | <span style={{ fontWeight: '600' }}>Знижки до</span> <span style={{ fontWeight: '900', fontSize: '16px' }}>60%</span> на вибрані категорії товарів!</p>
                </div>
            </section>

            <section>
                <h2>
                    знайди те, що шукаеш!
                </h2>
                <div className="wrapper">
                    <SmallFindCard image="collection1.png" text="наша нова коллекція" w='781'></SmallFindCard>
                    <SmallFindCard image="collection2.png" text="наші найкращі пропозиції" w='678'></SmallFindCard>
                    <BigFIndCard image="collection3.png"></BigFIndCard>
                </div>
            </section>
            <section>
                <h2>рекомаендації</h2>
                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <img src='nextIcon.png' className="arrowIcon" style={{ position: 'relative', left: '1461px', cursor: 'pointer' }}></img>
                    <div style={{ width: '1480px', display: 'flex', alignItems: 'center', marginLeft: '-40px', overflow: 'hidden' }}>
                        <SmallCard image="recs1.png"></SmallCard>
                        <SmallCard image="recs2.png"></SmallCard>
                        <SmallCard image="recs3.png"></SmallCard>
                        <SmallCard image="recs4.png"></SmallCard>
                        <SmallCard image="recs5.png"></SmallCard>
                        <SmallCard image="recs6.png"></SmallCard>
                        <SmallCard image="recs7.jpg"></SmallCard>

                    </div>
                </div>
                <h2 style={{ marginTop: '50px' }}>найкращі набори</h2>
                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <img src='nextIcon.png' className="arrowIcon" style={{ position: 'relative', left: '1461px', cursor: 'pointer' }}></img>
                    <div style={{ width: '1480px', display: 'flex', alignItems: 'center', marginLeft: '-40px', overflow: 'hidden' }}>
                        <SmallCard image="best1.png"></SmallCard>
                        <SmallCard image="best2.png"></SmallCard>
                        <SmallCard image="best3.png"></SmallCard>
                        <SmallCard image="best4.png"></SmallCard>
                        <SmallCard image="best5.png"></SmallCard>
                        <SmallCard image="best6.png"></SmallCard>
                        <SmallCard image="best7.jpg"></SmallCard>

                    </div>
                </div>
            </section>
        </>
    }
}