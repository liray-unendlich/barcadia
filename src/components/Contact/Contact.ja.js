import * as React from "react"
import { ContactStyles } from "./ContactStyles"

const Contact = () => {
  return (
    <ContactStyles>
      <form name="contact" method="POST" netlify>
        <input placeholder="お名前" type="text" name="name" />
        <input placeholder="メールアドレス" type="email" name="email" />
        <textarea placeholder="メッセージ" name="message" rows="5"></textarea>
        <button className="btn" type="submit">
          問い合わせ内容送信
        </button>
      </form>
    </ContactStyles>
  )
}

export default Contact
