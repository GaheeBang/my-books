import { ForkOutlined } from "@ant-design/icons"
import { Button, PageHeader, Input, message as messageDialog } from "antd"
import TextArea from "antd/lib/input/TextArea"
import Layout from "./Layout"
import styles from "./Add.module.css"
import { useState } from "react"
import { BookReqType } from "../types"

interface AddProps{
    loading: boolean;
    back: () => void;
    logout: () => void;
    add: (book: BookReqType) => void;
}

const Add: React.FC<AddProps> = ({loading, back, logout, add}) => {
    // const titleRef = useRef<Input>(null);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [author, setAuthor] = useState('');
    const [url, setUrl] = useState('');

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuthor(event.target.value)
    }

    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value)
    }

    return (
    <Layout>
        <PageHeader onBack={back} 
        title={<div><ForkOutlined />Add Book</div>} 
        subTitle="Add Your Book"
        extra={[
            <Button key="1" type="primary" onClick={logout} className={styles.button_logout}>Logout</Button>,
        ]}
        />

        <div className={styles.add}>
            <div className={styles.input_title}>
                Title
                <span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
                <Input placeholder="Title" className={styles.input} onChange={handleTitleChange}/>
            </div>

            <div className={styles.input_comment}>
                Comment
                <span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
                <TextArea rows={4} placeholder="Comment" className={styles.input} onChange={e => setMessage(e.target.value)}/>
            </div>

            <div className={styles.input_author}>
                Author
                <span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
                <Input placeholder="Author" className={styles.input} onChange={handleAuthorChange}/>
            </div>

            <div className={styles.input_url}>
                URL
                <span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
                <Input placeholder="URL" className={styles.input} onChange={handleUrlChange}/>
            </div>

            <div className={styles.button_area}>
                <Button size="large" loading={loading} onClick={click} className={styles.button}>Add</Button>
            </div>
        </div>
    </Layout>
    );

    function click(){

        console.log(title, " ", message, " ", author, " ", url)
        if( title === null || message === null || author === null || url === null){
            messageDialog.error('Please fill out all inputs.')
            return
        }

        add({
            title,
            message,
            author,
            url,
        })
    }
}

export default Add;