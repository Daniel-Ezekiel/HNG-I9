import Link from './Link';
import Socials from './Socials';

const ExternalLinks = () => {
    return (
        <section id="links-section">
            <Link id="twitter" url="https://twitter.com/db_ezekiel" name="@db_ezekiel"/>
            <Link id="slack" url="https://hng9.slack.com/" title="@db-ezekiel" />

            <Link id="btn__zuri" url="https://training.zuri.team/" name="Zuri Team" />
            <Link id="books" url="https://books.zuri.team/" name="Zuri Books" />
            <Link id="book__python" url="https://books.zuri.team/python-for-beginners?ref_id=db-ezekiel/" name="Python Books" />
            <Link id="pitch" url="https://background.zuri.team/" name="Background Check for Coders" />
            <Link id="book__design" url="https://books.zuri.team/design-rules" name="Design Books" />

            <Socials />
        </section>
    )
}

export default ExternalLinks;