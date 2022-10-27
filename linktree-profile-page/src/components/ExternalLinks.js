import Link from './Link';

const ExternalLinks = () => {
    return (
        <section>
            <Link id="twitter" url="https://twitter.com/db_ezekiel" title="@db_ezekiel"/>
            <Link id="slack" url="https://hng9.slack.com/" title="@db-ezekiel" />

            <Link id="btn__zuri" url="https://training.zuri.team/" title="Zuri Team" />
            <Link id="books" url="https://books.zuri.team/" title="Zuri Books" />
            <Link id="book__python" url="https://books.zuri.team/python-for-beginners?ref_id=db-ezekiel/" title="Python Books" subText="The Complete Python Package - Learn Python without Stress!" />
            <Link id="pitch" url="https://background.zuri.team/" title="Background Check for Coders" subText="Exquisite and Premium Background Check Services for Coders" />
            <Link id="book__design" url="https://books.zuri.team/design-rules" title="Design Books" subText="The All-In-One Design Rules Book by the Zuri Team. Grab your copy now and achieve Design Mastery!" />
        </section>
    )
}

export default ExternalLinks;