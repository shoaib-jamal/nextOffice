export function current(state) {
  return state.current
}


export function documentTable(state) {
  console.log("Get document table", state.tables)
  return state.tables['document']
}

export function selectedActionForEditor(state) {
  return state.selectedActionForEditor
}

export function allTables(state) {
  console.log("get all tables, ", state.tables)
  return Object.values(state.tables)
}

export function actions(state) {
  return state.actions
}

export function integrations(state) {
  return state.integrations
}

export function worldTable(state) {
  console.log("Get world table", state.tables)
  return state.tables['world']
}


export function userGroupTable(state) {
  console.log("Get user group table", state.tables)
  return state.tables['usergroup']
}

export function baseItemTypes() {
  return {
    "table": {
      label: "Data table",
      type: "table",
      icon: 'fas fa-table'
    },
    "view": {
      label: "View",
      type: "view",
      icon: 'fas fa-eye',
      disabled: true
    },
    "spreadsheet": {
      label: "Spreadsheet",
      type: "spreadsheet",
      icon: 'table_view'
    },
    "mermaid_graph": {
      label: "Mermaid Graph",
      type: "mermaid_graph",
      icon: 'fas fa-project-diagram'
    },
    "document": {
      label: "Document",
      type: "document",
      icon: 'fas fa-file-alt'
    },
    "yjsdocument": {
      label: "Collaborative editor",
      type: "yjsdocument",
      icon: 'fas fa-file-contract'
    },
    "folder": {
      label: "Folder",
      type: "folder",
      icon: 'folder_open'
    },
    "calendar": {
      label: "Calendar",
      type: "calendar",
      icon: 'fas fa-table'
    },
    "mailbox": {
      label: "Mailbox",
      type: "mailbox",
      icon: 'all_inbox',
      disabled: true
    },

  }

}

export function appConnectionStatus(state) {
  return state.appConnectionStatus
}


export function loggedIn(state) {
  let token = state.token;
  return !!token
}

export function endpoint(state) {
  return state.endpoint;
}

export function authToken(state) {
  return state.token
}

export function hideNavigationDrawer(state) {
  return state.hideNavigationDrawer
}

export function decodedAuthToken(state) {
  if (state.decodedAuthToken) {
    return state.decodedAuthToken
  }
  return state.decodedAuthToken
}

export function tables(state) {
  console.log("Get tables, ", state.tables);
  return Object.keys(state.tables).filter(function (tableName) {
    return tableName.indexOf("_has_") === -1;
  }).map(e => state.tables[e]).filter(function (e) {
    if (state.showHiddenTables) {
      return true;
    }
    if (e.is_hidden === 0) {
      return false;
    }
  });
}


