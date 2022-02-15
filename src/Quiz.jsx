import React, { useState } from 'react'
import { questions } from './questions'
import './Quiz.css'
import logo from './assets/images/reactlogo.png'


export default function Quiz() {

    const [good, setGood] = useState(0)


    const chekerHandler = (e, bool) => {

        if (bool) {
            setGood(good + 1)
            e.target.style.color = "var(--green)"
            e.target.disabled = "true"

        } else {
            setGood(good - 1)
            e.target.style.color = "var(--red)"
            e.target.disabled = "true"
        }
    }


    return (
        <div className='quiz'>
            <div className='quiz_header'>
                <div className="quiz_header_content">
                    <div className="quiz_info">
                        <img className='quiz_logo'
                            src={logo} alt="React logo" />
                        <h1>React Quiz</h1>
                    </div>
                    <div className="quiz_score">

                        <h2 className={good < 0 ? "danger" : undefined}>Score: {good}</h2>

                    </div>
                </div>


            </div>

            <div className='quiz_content'>
                {questions.map(question => (
                    <div className='quiz_question' key={question.id}>
                        <h2>N°{question.id}: {question.question}</h2>
                        {question.code && <div className='quiz_code'><code>{question.code.map(line => <p key={line.line}>{line.text}</p>)}</code></div>}
                        <div className='quiz_answers'>
                            {question.answer.map(answer => (
                                <button
                                    className='quiz_answerBtn'
                                    onClick={(e) => chekerHandler(e, answer.right)}
                                    key={answer.id}>{answer.text}</button>))}
                        </div>
                    </div>
                ))}
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi modi, aspernatur similique illo nobis eligendi vero quia commodi et numquam, recusandae voluptates fugiat veniam. Dolores voluptatem sapiente magnam. Voluptas, doloremque!
                    Tenetur adipisci nisi sed distinctio mollitia fugit porro ipsam corrupti ducimus eligendi. Eum dolorem optio molestiae assumenda, debitis architecto dolor, sint alias vel ipsa aliquid aliquam mollitia in! Aut, eius?
                    Facilis nam quae, quis soluta reprehenderit explicabo sint neque amet odio cum fugiat quas, dignissimos doloribus cupiditate laudantium, exercitationem cumque distinctio non. Reiciendis nisi optio iure possimus id aspernatur maxime!
                    Deleniti minus quidem doloribus, perspiciatis molestiae debitis molestias facere beatae ex expedita a qui harum asperiores voluptatum officia voluptate. Eius quo voluptatem dolorum temporibus molestias veniam aliquam illum. Officia, rerum.
                    Voluptatibus, harum architecto? Nemo esse minus, eveniet, officiis dicta rerum officia dignissimos mollitia deleniti voluptate similique in nulla impedit, quaerat quos? Quidem libero ullam quae doloremque ratione, deleniti veniam vitae?
                    Facere esse exercitationem maiores, assumenda officia consequuntur nisi a doloremque provident? Eos temporibus mollitia doloribus quis ullam quibusdam error omnis ipsa sit quas. Cumque nam optio voluptas provident sunt debitis.
                    Nobis dicta suscipit sint corrupti omnis aliquam cupiditate aperiam rerum nihil debitis, ut ex perferendis sunt ea magni quasi commodi expedita laudantium, architecto officiis eum! Repellendus rerum ex quis maiores.
                    Consequuntur labore accusantium, debitis sit qui a perspiciatis ratione voluptas soluta est repudiandae vel cum possimus aliquam optio rerum laboriosam. Quas perspiciatis numquam debitis asperiores consequatur reprehenderit consectetur, obcaecati ducimus.
                    Reiciendis deserunt blanditiis eaque sunt quas tempora id voluptatibus hic distinctio vel quia quo ad repudiandae doloremque, quod quisquam reprehenderit, quidem temporibus culpa ratione dolorem repellat odio laborum! Dicta, qui.
                    Deserunt quasi illo tenetur animi unde! Necessitatibus tempora placeat eligendi ipsum veniam, ducimus velit, sint facere omnis consequuntur distinctio et quo saepe vero aliquam repellat, similique quod vitae adipisci accusamus.
                    Velit culpa, accusantium labore corporis impedit enim architecto animi delectus repellat iure accusamus, assumenda, nobis veritatis? Omnis repellendus accusantium hic, nam iure, architecto, tempore deleniti aspernatur eligendi sunt rerum dignissimos.
                    Illo delectus iusto, nam corporis aperiam, voluptatum rem eum dolorem reiciendis a facere impedit accusantium fugit cumque dolores laboriosam magnam omnis! Repudiandae eveniet illum sint unde molestias, odio impedit perspiciatis.
                    Ab tenetur pariatur dolor, suscipit explicabo hic aliquam voluptatibus iste molestias illo asperiores nulla dicta cupiditate accusamus, cum veniam ducimus exercitationem ea cumque assumenda in nam libero. Vitae, aliquid impedit?
                    Tempora quo, hic obcaecati illo vitae soluta explicabo nam perferendis est numquam? Asperiores nisi quasi ea, architecto placeat non qui! Voluptates exercitationem perferendis iste velit in autem animi beatae esse.
                    Blanditiis ullam maxime, quia alias quibusdam sint nostrum pariatur nisi, in eum inventore est ea amet voluptatum, quas repellat architecto nesciunt! Quo consequuntur consectetur neque rem culpa iste obcaecati totam!
                    Porro doloremque minima tempore aspernatur quas officia, nostrum illum mollitia doloribus ab ratione voluptas nobis nisi esse. Quaerat dolor error vero necessitatibus itaque at facilis ullam eius! Est, in dolore!
                    Consequuntur nostrum, repudiandae voluptate necessitatibus enim dolores magni consequatur quo modi dignissimos est assumenda atque recusandae, delectus natus quae voluptates rerum ipsum odio voluptatibus, culpa soluta ad laboriosam asperiores. Dolores.
                    Numquam ea necessitatibus officiis dicta adipisci eum nesciunt, voluptates maxime autem sequi dolore tenetur ullam, porro ducimus, libero dolores reiciendis! Tempora illo earum eligendi facere laboriosam aspernatur ipsum esse dolorum?
                    Fugit veniam iusto pariatur asperiores vitae recusandae, ipsam quisquam cum aperiam omnis! Voluptatum unde nobis doloribus tempora aspernatur debitis neque nesciunt labore, minima, accusantium et quas facilis repellendus velit placeat!
                    Iusto consectetur a quos, repudiandae minus beatae mollitia rem fugit vero cum, quia laborum. Dignissimos nihil, assumenda fugit expedita aspernatur sequi necessitatibus fuga, vel doloribus iusto animi ea autem inventore?</div>
            </div>
        </div>
    )
}



