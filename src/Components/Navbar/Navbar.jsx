import React, { useState, useRef, useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Navbar.module.css';

const barStyle = {
	bar1: {
		position: 'absolute',
		width: '15px',
		transform: 'rotate(45deg)',
	},
	bar2: {
		position: 'absolute',
		left: '-2px',
	},
	bar3: {
		position: 'absolute',
		width: '15px',
		transform: 'rotate(-45deg)',
	},
};

const circle = {
	background: 'linear-gradient(40deg, #8983F7, #1c2931 70%)',
};
const cresent = {
	transform: 'scale(1)',
};
const Navbar = () => {
	const [preScrollPos, setPreScrollPos] = useState(
		window.pageYOffset,
	);
	const navRef = useRef();

	const { newTheme, mode, handleMode, open, handleMenu } =
		useContext(ThemeContext);

	window.onscroll = () => {
		let currentScrollPos = window.pageYOffset;
		if (preScrollPos > currentScrollPos) {
			navRef.current.style.top = '0';
		} else {
			navRef.current.style.top = '-80px';
		}
		setPreScrollPos(currentScrollPos);
	};

	return (
		<nav
			ref={navRef}
			className={styles.navContainer}
			style={{
				background: `${newTheme.background}`,
				boxShadow: `3px 3px 10px ${newTheme.line}`,
			}}
		> 
			<div className={styles.navbar}> 
				<a href='https://pushpendra-portfolio-pandeypushpendra3.vercel.app/' target='blank'> 
					<div className={styles.logo}>
						<img
							src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAkFBMVEX///8ujd45m+Q4meNKqegti947neQsit1Ip+gYhNwwkeCtzfA+oeZMqugulOGAvOx6tepTr+q83Pbd7fr1+v6azPHQ4vbn8fschtzz+P2ky/DK4/fs9fzU6fmVyPA8o+e20/GNuuoAgNuXwOxcoeNNmuJvr+gikeFbqOaw1POIwO50t+y12fWi0PJmtevK5Pe+9zuaAAADUklEQVR4nO3ZW3eiMBSGYQFFdIAqeECpg9pWalvt//93o3LUUsBZ0qzG97mTlYudz52EQ6sFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADuweRPueXEFV1iw1xl3au07q8mogttznTtdevwet7TTHSxDXnudmo6xLAaiS63CY+9uhEceV1HdMENWFyVQaezHoiu+PbcnnJVBor3It+uoFyr238UXfOtzXvXhyBdJwyuDkF5EV3zzTnPdr9Up+d1zzLwJNwYq4wmT33vLAQZj8hqjt1VstZQpLxZqvbk5ZbHSnQ1gvidLARPugOypkkWgnKvjdBadrMQRNcizECxY8p9Hg1HYT/OoL8RXYow8zBphFB0KcKMsgwWomtpwMyfrwZF5vlnpEGawVZYpU3xN2H6F18Iw9z+twy1iP0mrthGTF+TqRXK9f00HSjZprgM7bIINPs1G5tmYIqrtwHz0iY4hZDdGuvJNVVgxTe3DdUq9jQdbWrRJakycKsjUM/6IM5AF1jzrZmqXkXL7Qd2fE01xJV8a1u7dPondu5cSDOQ6Fwwc3MtXgialrs/cLRkrDz3B75qJnRt81Bkl39f8q7Ho1V57hPfkjmZ6qbGu6GRmozX5HleCNIuqLW+d1lkTVf2Y0bpUlBrvSFMIzDfmy7tx0z1IGLu6wx/M+PhgS7PeyQ3zeBvjdFOMjowJbpDuiqDRRpBvch+iWsy8NOFcFgKEn17dnUjUp3BWA8Mo/boXyTNIKiYlW+ZaQJGYMj0vdFNZhaMvx80W4wtM2uCQxv4P1dh87IMzvpgO8zN2AgOG8HZb3keFY7cZHL5PhgNz6b8xVBcvU3IMsj1wXtpBEFbps2gdcygHTGyPpgm1woZlkTH4klRBh9GWQR7ybqgOINtSQaSbYcnbmBFchn4ybVLbaMt1aEYK+qD0XfLwBhLtw6OXCP5j3Nno/O1EQ6rYLiTbTOMFWbQctoXx6GxH8vz6uxScQat0aeT8+lKuQYS32RwV9z2MHLPGdAHWR9YO9GlCEMGZHBEBmRw5FpxBkMyuOcMZmkG8nw/vNpDsh9I+lBYx2PUCNaH6EJEmu6toXXfERy4zqfUz8YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD//QN8glUvhfgU/AAAAABJRU5ErkJggg=='
							alt='Logo'
						/>
					</div>
				</a>

				<div
					style={{ color: `${newTheme.title}` }}
					className={styles.links}
				>
					<a href='#home'>Home</a>
					<a href='#about'>About</a>
					<a href='#experience'>Experience</a>
					<a href='#projects'>Projects</a>

					<a href='#contact'>Contact</a>
				</div>
				<button
					aria-label={mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
					title={
						mode === 'dark' ? 'Toggle Light Mode' : 'Toggle Dark Mode'
					}
					style={{ color: `${newTheme.title}` }}
					className={styles.modeButton}
					onClick={handleMode}
				>
					<div
						className={styles.circle}
						style={mode === 'light' ? circle : {}}
					>
						<div
							style={mode === 'light' ? cresent : {}}
							className={styles.crescent}
						></div>
					</div>
				</button>

				<div onClick={handleMenu} className={styles.bars}>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar1
						}
					></div>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar2
						}
					></div>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar3
						}
					></div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
