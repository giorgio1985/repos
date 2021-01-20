/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
// import { FormattedMessage } from 'react-intl';
// import { createStructuredSelector } from 'reselect';
// import { useSelector, useDispatch } from 'react-redux';

// import { useInjectReducer, useInjectSaga } from 'redux-injectors';
// import {
// makeSelectRepos,
// makeSelectLoading,
// makeSelectError,
// } from 'containers/App/selectors';
import H2 from 'components/H2';
// import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
// import Form from './Form';
// import Input from './Input';
import Section from './Section';
// import messages from './messages';
// import { loadRepos } from '../App/actions';
// import { changeUsername } from './actions';
// import { makeSelectUsername } from './selectors';
// import reducer from './reducer';
// import saga from './saga';

// const key = 'home';

export default function HomePage() {
  // const { repos, username, loading, error } = useSelector(stateSelector);

  // const dispatch = useDispatch();

  //  const onChangeUsername = evt => dispatch(changeUsername(evt.target.value));
  // const onSubmitForm = evt => {
  //  if (evt !== undefined && evt.preventDefault) evt.preventDefault();
  // if (!username) return;
  // dispatch(loadRepos());
  // };

  // useInjectReducer({ key, reducer });
  // useInjectSaga({ key, saga });

  // useEffect(() => {
  // When initial state username is not null, submit the form to load repos
  // if (username && username.trim().length > 0) onSubmitForm();
  // }, []);

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <H2>{/* <FormattedMessage {...messages.startProjectHeader} /> */}</H2>
          <p>{/*  <FormattedMessage {...messages.startProjectMessage} /> */}</p>
        </CenteredSection>
        <Section>
          <H2>{/*  <FormattedMessage {...messages.trymeHeader} /> */}</H2>

          {/*  <FormattedMessage {...messages.trymeMessage} /> */}
          <AtPrefix>
            {/*   <FormattedMessage {...messages.trymeAtPrefix} /> */}
          </AtPrefix>

          {/*    <ReposList {...reposListProps} /> */}
        </Section>
      </div>
    </article>
  );
}
