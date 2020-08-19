import React from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from "./components/Carousel";
import { Container, Row, Col } from 'reactstrap';

function App() {
	return (
		<Container className="themed-container" fluid="lg">
			<Row xs="1">
			<Header />
			</Row>
			<Row xs="1">
				<Carousel/>
			</Row>

		</Container>
	);
}

export default App;
