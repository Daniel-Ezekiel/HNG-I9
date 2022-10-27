import Link from './Link';

const ExternalLinks = () => {
    return (
        <section>
            <Link id="twitter" url="https://twitter.com/db_ezekiel" title="@db_ezekiel"/>
            <Link id="slack" url="https://hng9.slack.com/" title="@db-ezekiel" />

            <Link id="btn__zuri" url="https://training.zuri.team/" title="Zuri Team" />
            <Link id="books" url="https://books.zuri.team/" title="Zuri Books" />
            <Link id="book__python" url="https://books.zuri.team/python-for-beginners?ref_id=db-ezekiel/" title="Python Books" />
        </section>
    )
}

export default ExternalLinks;