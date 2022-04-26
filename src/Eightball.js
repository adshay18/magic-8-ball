import React, { useState } from 'react';
import './Eightball.css';

const Eightball = ({
	answers = [
		{ msg: 'It is certain.', color: 'green' },
		{ msg: 'It is decidedly so.', color: 'green' },
		{ msg: 'Without a doubt.', color: 'green' },
		{ msg: 'Yes - definitely.', color: 'green' },
		{ msg: 'You may rely on it.', color: 'green' },
		{ msg: 'As I see it, yes.', color: 'green' },
		{ msg: 'Most likely.', color: 'green' },
		{ msg: 'Outlook good.', color: 'green' },
		{ msg: 'Yes.', color: 'green' },
		{ msg: 'Signs point to yes.', color: 'goldenrod' },
		{ msg: 'Reply hazy, try again.', color: 'goldenrod' },
		{ msg: 'Ask again later.', color: 'goldenrod' },
		{ msg: 'Better not tell you now.', color: 'goldenrod' },
		{ msg: 'Cannot predict now.', color: 'goldenrod' },
		{ msg: 'Concentrate and ask again.', color: 'goldenrod' },
		{ msg: "Don't count on it.", color: 'red' },
		{ msg: 'My reply is no.', color: 'red' },
		{ msg: 'My sources say no.', color: 'red' },
		{ msg: 'Outlook not so good.', color: 'red' },
		{ msg: 'Very doubtful.', color: 'red' }
	]
}) => {
	const [ text, setText ] = useState('Think of a Question');
	const [ color, setColor ] = useState('black');

	const pickAnswer = (answers) => {
		let idx = Math.floor(Math.random() * answers.length);
		return answers[idx];
	};
	const restart = () => {
		setColor('black');
		setText('Think of a Question');
	};

	const updateBall = () => {
		let answer = pickAnswer(answers);
		setText(answer.msg);
		setColor(answer.color);
		setTimeout(restart, 2500);
	};
	return (
		<div
			className="Eightball"
			style={{ backgroundColor: color }}
			onClick={() => {
				updateBall();
			}}
		>
			<div className="Container">
				<p className="Eightball-text">{text}</p>
			</div>
		</div>
	);
};

export default Eightball;
