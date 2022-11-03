import Anchor from './Anchor';
import Socials from './Socials';

const ExternalLinks = () => {
    return (
        <section id="links-section">
            <Anchor id="twitter" url="https://twitter.com/db_ezekiel" name="@db_ezekiel"/>
            <Anchor id="slack" url="https://hng9.slack.com/"name="@danielezekiel" />

            <Anchor id="btn__zuri" url="https://training.zuri.team/" name="Zuri Team" />
            <Anchor id="books" url="https://books.zuri.team/" name="Zuri Books" title="Visit to find books about design and coding." />
            <Anchor id="book__python" url="https://books.zuri.team/python-for-beginners?ref_id=danielezekiel/" name="Python Books" title="The Complete Python Package - Learn Python without stress." />
            <Anchor id="pitch" url="https://background.zuri.team/" name="Background Check for Coders" title="Exquisite and Premium Background Check Services for Coders" />
            <Anchor id="book__design" url="https://books.zuri.team/design-rules" name="Design Books" title="The All-In-One Design Rules Book by the Zuri Team" />
            <Anchor id="contact" url="/contact" name="Contact"/>

            <Socials />
        </section>
    )
}

export default ExternalLinks;