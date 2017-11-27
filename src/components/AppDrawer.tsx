import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import { ListItem, ListItemText, ListItemIcon } from 'material-ui';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import Divider from 'material-ui/Divider';

const styles = (theme: any) => ({
  paper: {
    width: 250,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.primary[500],
    },
  },
  // https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items
  toolbarIe11: {
    display: 'flex',
  },
  toolbar: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  anchor: {
    color: theme.palette.text.secondary,
  },
});
type ClassNames = keyof typeof styles;

// function AppDrawer(props: any, context: any) {
function AppDrawer(props: any) {
  const {classes, className, disablePermanent, mobileOpen, onRequestClose} = props;

  return (
    <div className={className}>
      <Hidden lgUp={!disablePermanent}>
        <Drawer
          classes={{
            paper: classNames(classes.paper, 'algolia-drawer'),
          }}
          type="temporary"
          open={mobileOpen}
          onRequestClose={onRequestClose}
        >
          <div>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon/>
              </ListItemIcon>
              <ListItemText primary="Inbox"/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <StarIcon/>
              </ListItemIcon>
              <ListItemText primary="Starred"/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SendIcon/>
              </ListItemIcon>
              <ListItemText primary="Send mail"/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon/>
              </ListItemIcon>
              <ListItemText primary="Drafts"/>
            </ListItem>
          </div>
          <Divider/>
          <div>
            <ListItem button>
              <ListItemIcon>
                <MailIcon/>
              </ListItemIcon>
              <ListItemText primary="All mail"/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DeleteIcon/>
              </ListItemIcon>
              <ListItemText primary="Trash"/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ReportIcon/>
              </ListItemIcon>
              <ListItemText primary="Spam"/>
            </ListItem>
          </div>
        </Drawer>
      </Hidden>
    </div>
  );
}

export default withStyles<ClassNames>(styles)(AppDrawer);
