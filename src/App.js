import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Post from './components/Post';
import Header from './components/Header';
import TopCard from './components/TopCard';
import Content from './components/Content';
import BottomCard from './components/BottomCard';

const App = () => (
	<Fragment>
		<Header />
		<main className="my-5 py-5">
			<Container className="px-0">
				<Row noGutters className="pt-1 pt-md-2 w-100 px-4 px-xl-0 position-relative">
					<Col>
						<TopCard />
					</Col>
				</Row>
				<Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
					<Col>
						<Content />
					</Col>
				</Row>
				<Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
					<Col>
						<BottomCard />
					</Col>
				</Row>
			</Container>
		</main>
	</Fragment>
);

export default App;
