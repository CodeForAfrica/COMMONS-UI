import React from "react";
import PropTypes from "prop-types";

import { A } from "@commons-ui/core";

import useStyles from "../useStyles";

function Contacts({ icons, profile: { contacts }, ...props }) {
  const classes = useStyles(props);

  if (!icons || !contacts) {
    return null;
  }
  return (
    <div className={classes.profileContacts}>
      {contacts.linkedIn && contacts.linkedIn.url && icons.linkedIn && (
        <A href={contacts.linkedIn.url} className={classes.profileContactsLink}>
          <img
            src={icons.linkedIn.image.url}
            alt={`${icons.linkedIn.image.alt || "LinkedIn Profile"}`}
            className={classes.profileContactsIcon}
          />
        </A>
      )}
      {contacts.twitter && contacts.twitter.url && icons.twitter && (
        <A href={contacts.twitter.url} className={classes.profileContactsLink}>
          <img
            src={icons.twitter.image.url}
            alt={`${icons.twitter.image.alt || "Twitter Profile"}`}
            className={classes.profileContactsIcon}
          />
        </A>
      )}
      {contacts.website && contacts.website.url && icons.website && (
        <A href={contacts.website.url} className={classes.profileContactsLink}>
          <img
            src={icons.website.image.url}
            alt={`${icons.website.image.alt || "Web Profile"}`}
            className={classes.profileContactsIcon}
          />
        </A>
      )}
    </div>
  );
}

Contacts.propTypes = {
  icons: PropTypes.shape({
    linkedIn: PropTypes.shape({
      image: PropTypes.shape({
        alt: PropTypes.string,
        url: PropTypes.string.isRequired,
      }).isRequired,
    }),
    twitter: PropTypes.shape({
      image: PropTypes.shape({
        alt: PropTypes.string,
        url: PropTypes.string.isRequired,
      }),
    }),
    website: PropTypes.shape({
      image: PropTypes.shape({
        alt: PropTypes.string,
        url: PropTypes.string.isRequired,
      }).isRequired,
    }),
  }),
  profile: PropTypes.shape({
    contacts: PropTypes.shape({
      linkedIn: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }),
      twitter: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }),
      website: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }),
    }),
  }),
};

Contacts.defaultProps = {
  icons: undefined,
  profile: undefined,
};

export default Contacts;
