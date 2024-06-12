import { Box, Typography } from "@mui/material";
const TermsAndConditions = () => {
  return (
    <Box sx={{ p: 2, bgcolor: "#F4F5F3" }}>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Terms and Conditions{" "}
      </Typography>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Welcome to <span color="secondary.main">TextMagnet</span>!
      </Typography>
      <Typography sx={{ mb: 1 }}>
        These terms and conditions outline the rules and regulations for the use
        of Company Name's Website, located at Website.com.
      </Typography>
      <Typography sx={{ mb: 1 }}>
        By accessing this website we assume you accept these terms and
        conditions. Do not continue to use Website Name if you do not agree to
        take all of the terms and conditions stated on this page.
      </Typography>
      <Typography sx={{ mb: 1 }}>
        The following terminology applies to these Terms and Conditions, Privacy
        Statement and Disclaimer Notice and all Agreements: “Client”, “You” and
        “Your” refers to you, the person log on this website and compliant to
        the Company's terms and conditions. “The Company”, “Ourselves”, “We”,
        “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”,
        refers to both the Client and ourselves. All terms refer to the offer,
        acceptance and consideration of payment necessary to undertake the
        process of our assistance to the Client in the most appropriate manner
        for the express purpose of meeting the Client's needs in respect of
        provision of the Company's stated services, in accordance with and
        subject to, prevailing law of Netherlands. Any use of the above
        terminology or other words in the singular, plural, capitalization
        and/or he/she or they, are taken as interchangeable and therefore as
        referring to same.
      </Typography>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Cookies
      </Typography>
      <Typography sx={{ mb: 1 }}>
        We employ the use of cookies. By accessing Website Name, you agreed to
        use cookies in agreement with the Company Name's Privacy Policy. Most
        interactive websites use cookies to let us retrieve the user's details
        for each visit. Cookies are used by our website to enable the
        functionality of certain areas to make it easier for people visiting our
        website. Some of our affiliate/advertising partners may also use
        cookies.
      </Typography>
      <Typography variant="h6" sx={{ mb: 1 }}>
        License
      </Typography>
      <Typography sx={{ mb: 1 }}>
        Unless otherwise stated, Company Name and/or its licensors own the
        intellectual property rights for all material on Website Name. All
        intellectual property rights are reserved. You may access this from
        Website Name for your own personal use subjected to restrictions set in
        these terms and conditions.
      </Typography>
      <Typography sx={{ mb: 1 }}>You must not:</Typography>
      <ul>
        <li>Republish material from Website Name Sell,</li>
        <li>rent or sub-license material from Website Name Reproduce,</li>
        <li>
          duplicate or copy material from Website Name Redistribute content from
          Website Name
        </li>
      </ul>
      <Typography sx={{ mb: 1 }}>
        This Agreement shall begin on the date hereof.
      </Typography>
      <Typography sx={{ mb: 1 }}>
        Parts of this website offer an opportunity for users to post and
        exchange opinions and information in certain areas of the website.
        Company Name does not filter, edit, publish or review Comments prior to
        their presence on the website. Comments do not reflect the views and
        opinions of Company Name,its agents and/or affiliates. Comments reflect
        the views and opinions of the person who post their views and opinions.
        To the extent permitted by applicable laws, Company Name shall not be
        liable for the Comments or for any liability, damages or expenses caused
        and/or suffered as a result of any use of and/or posting of and/or
        appearance of the Comments on this website.
      </Typography>
    </Box>
  );
};

export default TermsAndConditions;
