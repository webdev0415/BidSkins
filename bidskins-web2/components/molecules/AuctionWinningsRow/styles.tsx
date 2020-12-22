import styled from 'styled-components'

export const Wrapper = styled.div`
	height: 70px;
	width: 100%;
	display: grid;
	grid-template-rows: 1fr;
	grid-gap: 125px;
	align-items: center;
	justify-items: end;
	padding-left: 10px;
	border-bottom: 1px solid #3e3e3e;

	cursor: pointer;

	& > :nth-child(2) {
		justify-self: start;
	}

	& > :nth-child(5) {
		justify-self: start;
	}

	&:hover {
		background-color: #39393e;
	}

	@media (min-width: 768px) {
		grid-template-columns: 75px 75px 175px;
		grid-gap: 75px;

		& > :nth-child(n + 4) {
			display: none;
			visibility: collapse;
		}
	}

	@media (min-width: 1200px) {
		grid-gap: 100px;
		grid-template-columns: 75px 75px 175px 75px;

		& > :nth-child(4) {
			display: block;
			visibility: visible;
		}
		& > :nth-child(5) {
			display: none;
			visibility: collapse;
		}
	}

	@media (min-width: 1300px) {
		grid-template-columns: 75px 75px 175px 75px 200px;

		& > :nth-child(5) {
			display: block;
			visibility: visible;
		}
	}
`
