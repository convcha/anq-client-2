import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

const styles = (theme: any) => ({
  content: theme.mixins.gutters({
    paddingTop: 80,
    flex: '1 1 100%',
    maxWidth: '100%',
    margin: '0 auto',
  }),
  [theme.breakpoints.up(900 + theme.spacing.unit * 6)]: {
    content: {
      maxWidth: 900,
    },
  },
});

function AppContent(props: any) {
  const {className, classes, children} = props;

  return <div className={classNames(classes.content, className)}>{children}</div>;
}

export default withStyles(styles)(AppContent);
