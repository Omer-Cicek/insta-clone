import React from 'react';
import { Link } from 'react-router-dom';

const ProfileNotFound = () => {
  return (
    <div className="text-center grid gap-y-6 pt-5">
      <h6 className="text-[22px] font-semibold">
        Sorry, this page is not available.
      </h6>
      <p>
        The link you followed may be broken, or the page amy have been removed.
        <Link to="/" className="text-link">
          Go back to Instagram.
        </Link>
      </p>
    </div>
  );
};

export default ProfileNotFound;
