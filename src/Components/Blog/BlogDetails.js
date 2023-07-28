import "./BlogDetails.css";
import { useLocation, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

function BlogDetails() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <Container>
        <div className="row">
          <div className="col-9">
            <h6 className="BlogName">{location.state.name}</h6>
            <div className="BlogImage">
              <p>Here will be image brooo!</p>
            </div>
            <p className="BlogDescription">
              {location.state.description}
              blog, in full Web log or Weblog, online journal where an
              individual, group, or corporation presents a record of activities,
              thoughts, or beliefs. Some blogs operate mainly as news filters,
              collecting various online sources and adding short comments and
              Internet links. Other blogs concentrate on presenting original
              material. In addition, many blogs provide a forum to allow
              visitors to leave comments and interact with the publisher. “To
              blog” is the act of composing material for a blog. Materials are
              largely written, but pictures, audio, and videos are important
              elements of many blogs. The “blogosphere” is the online universe
              of blogs. From geeks to mainstream The World Wide Web and the idea
              of a blog appeared at the same time. Tim Berners-Lee, often
              described as the Web’s inventor, created the first “blog” in 1992
              to outline and render visible the ongoing development of the Web
              and the software necessary to navigate this new space. Web
              history, especially the early growth of Web servers and sites, is
              chronicled on the various “What’s New” pages in the archives of
              the National Center for Supercomputing Applications (NCSA) at the
              University of Illinois at Urbana-Champaign. Another example of a
              blog that existed before the word was coined is Slashdot.
              Following its debut in September 1997, Slashdot operated as a
              clearinghouse for information in its “News for Nerds,” with a
              small set of editors who decided what to publish of numerous
              articles and news items submitted by the “geek” community. Indeed,
              Web sites mentioned on Slashdot were often overwhelmed, leading to
              a condition now known as being “slashdotted.” In December 1997,
              Jorn Barger, an early online presence, coined the term web log to
              describe his Web site RobotWisdom.com. In early 1999 another
              individual with considerable online experience, Peter Merholz,
              began to employ the term blog on his site Peterme.com. While the
              history of the term is pretty well settled, the same cannot be
              said of the identity of the first blogger. Depending on the
              definition of a blog, Berners-Lee may not qualify as the first
              blogger. Claimants to this title include Justin Hall, a college
              student who started an online list at links.net in 1994; Carolyn
              Burke, who began publishing Carolyn’s Diary online in 1995; and
              Dave Winer, who has published Scripting News online since April 1,
              1997. The growth of the blogosphere has been nothing short of
              remarkable. Technorati, Inc., a Web site and organization
              dedicated to mapping and searching the blogosphere, found that by
              October 2005 there were 19.6 million blogs, a number that has been
              doubling roughly every five months. Approximately 70,000 new blogs
              are created each day—or, more vividly, nearly one every second.
              Also of importance is the growth of blogs in languages other than
              English, especially Chinese. Despite the overwhelming number of
              blogs, very few individuals make a living as a blogger. A few
              individuals earn money from their Web sites by carrying ads and
              appeals for funds, and some blogs are financed by corporate or
              organizational owners; nevertheless, most bloggers derive
              nonmonetary rewards from their activity. In particular, blogs
              offer ordinary individuals the ultimate soapbox and an opportunity
              to create their own digital identity or personal brand. One reason
              for the proliferation of blogs is the ease with which they can be
              established and maintained. Many services and software systems are
              available that allow an individual to set up a blog in less than
              an hour. Of course, updating a blog is essential for maintaining
              its presence and importance. Statistics on blogs that are started
              but not updated remain elusive, but the proportion is undoubtedly
              substantial.
            </p>
          </div>
          <div className="col-3">
            <h6
              className="BlogName"
              style={{ fontSize: "30px", backgroundColor: "black" }}
            >
              Recent-Blogs
            </h6>
            <ul>
              <li>
                <Link>Blog-1</Link>
              </li>
              <li>Blog-2</li>
              <li>Blog-3</li>
              <li>Blog-1</li>
              <li>Blog-2</li>
              <li>Blog-3</li>
              <li>Blog-1</li>
              <li>Blog-2</li>
              <li>Blog-3</li>
            </ul>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default BlogDetails;
