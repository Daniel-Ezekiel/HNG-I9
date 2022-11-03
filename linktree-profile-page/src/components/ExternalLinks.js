import Link from './Link';
import Socials from './Socials';

const ExternalLinks = () => {
    return (
        <section id="links-section">
            <Link id="twitter" url="https://twitter.com/db_ezekiel" name="@db_ezekiel"/>
            <Link id="slack" url="https://hng9.slack.com/"name="@danielezekiel" />

            <Link id="btn__zuri" url="https://training.zuri.team/" name="Zuri Team" />
            <Link id="books" url="https://books.zuri.team/" name="Zuri Books" title="Visit to find books about design and coding." />
            <Link id="book__python" url="https://books.zuri.team/python-for-beginners?ref_id=danielezekiel/" name="Python Books" title="The Complete Python Package - Learn Python without stress." />
            <Link id="pitch" url="https://background.zuri.team/" name="Background Check for Coders" title="Exquisite and Premium Background Check Services for Coders" />
            <Link id="book__design" url="https://books.zuri.team/design-rules" name="Design Books" title="The All-In-One Design Rules Book by the Zuri Team" />
            <Link id="contact" url="/contact" name="Contact"/>

            <Socials />
        </section>
    )
}

export default ExternalLinks;