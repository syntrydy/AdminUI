export default function() {
  return [
    {
      title: "sidemenu.dashboard",
      items: [
        {
          title: "Home",
          to: "/home",
          htmlBefore: '<i class="material-icons">dashboard</i>',
          htmlAfter: ""
        }
      ]
    },
    {
      title: "Identities",
      items: [
        {
          title: "sidemenu.groups",
          to: "/groups",
          htmlBefore: '<i class="material-icons">people</i>',
          htmlAfter: ""
        },
        {
          title: "sidemenu.users",
          to: "/users",
          htmlBefore: '<i class="material-icons">supervised_user_circle</i>',
          htmlAfter: ""
        },
        {
          title: "sidemenu.attributes",
          to: "/attributes",
          htmlBefore: '<i class="material-icons">gavel</i>',
          htmlAfter: ""
        }
      ]
    },
    {
      title: "SSO",
      items: [
        {
          title: "OPENID Connect",
          htmlBefore: '<i class="material-icons">control_camera</i>',
          open: false,
          items: [
            {
              title: "Scopes",
              to: "/openid_scopes"
            },
            {
              title: "Clients",
              to: "/openid_clients"
            },
            {
              title: "Sector identifiers",
              to: "/openid_sector_identifiers"
            }
          ]
        },
        {
          title: "SAML",
          htmlBefore: '<i class="material-icons">all_inclusive</i>',
          open: false,
          items: [
            {
              title: "Trust Relationships",
              to: "/saml_trusts"
            },
            {
              title: "SAML Acrs",
              to: "/saml_acrs"
            }
          ]
        },
        {
          title: "UMA",
          htmlBefore: '<i class="material-icons">polymer</i>',
          open: false,
          items: [
            {
              title: "Scopes",
              to: "/uma_scopes"
            },
            {
              title: "Resources",
              to: "/uma_ressources"
            }
          ]
        },
        {
          title: "PASSPORT",
          htmlBefore: '<i class="material-icons">credit_card</i>',
          open: false,
          items: [
            {
              title: "Providers",
              to: "/password_providers"
            },
            {
              title: "Basic configuration",
              to: "/passport_config"
            },
            {
              title: "Idp initiated",
              to: "/passport_idpflow"
            }
          ]
        }
      ]
    },
    {
      title: "Extra",
      items: [
        {
          title: "Server status",
          to: "/server_status",
          htmlBefore: '<i class="material-icons">settings_input_hdmi</i>',
          htmlAfter: ""
        },
        {
          title: "View Logs",
          to: "/logs",
          htmlBefore: '<i class="material-icons">attach_file</i>',
          htmlAfter: ""
        },
        {
          title: "Certificates",
          to: "/certificates",
          htmlBefore: '<i class="material-icons">new_releases</i>',
          htmlAfter: ""
        }
      ]
    },
    {
      title: "Configuration",
      items: [
        {
          title: "Organization",
          htmlBefore: '<i class="material-icons">account_balance</i>',
          open: false,
          items: [
            {
              title: "System",
              to: "/file-manager-list"
            },
            {
              title: "Smtp",
              to: "/file-manager-cards"
            },
            {
              title: "Settings",
              to: "/file-manager-cards"
            },
            {
              title: "Extra libraries",
              to: "/file-manager-cards"
            }
          ]
        },
        {
          title: "Authentication",
          htmlBefore: '<i class="material-icons">vpn_key</i>',
          open: false,
          items: [
            {
              title: "Default",
              to: "/user-profile"
            },
            {
              title: "SCIM",
              to: "/user-profile-lite"
            }
          ]
        },
        {
          title: "Registration",
          htmlBefore: '<i class="material-icons">how_to_reg</i>',
          open: false,
          items: [
            {
              title: "Default",
              to: "/user-profile"
            },
            {
              title: "SCIM",
              to: "/user-profile-lite"
            }
          ]
        },
        {
          title: "oxTrust Json",
          htmlBefore: '<i class="material-icons">control_camera</i>',
          open: false,
          items: [
            {
              title: "Default",
              to: "/user-profile"
            },
            {
              title: "SCIM",
              to: "/user-profile-lite"
            },
            {
              title: "Recaptcha",
              to: "/edit-user-profile"
            },
            {
              title: "API",
              to: "/login"
            }
          ]
        },
        {
          title: "oxAuth Json",
          htmlBefore: '<i class="material-icons">view_module</i>',
          open: false,
          items: [
            {
              title: "Basic",
              to: "/file-manager-list"
            },
            {
              title: "Fido2",
              to: "/file-manager-list"
            },
            {
              title: "Files - Cards View",
              to: "/file-manager-cards"
            }
          ]
        }
      ]
    },
    {
      title: "Settingts",
      items: [
        {
          title: "Toggle Header",
          htmlBefore: '<i class="material-icons">view_day</i>',
          to: "/header-navigation"
        },
        {
          title: " Hide Menu",
          htmlBefore: '<i class="material-icons">fast_rewind</i>',
          to: "/icon"
        },
        {
          title: "Logout",
          htmlBefore: '<i class="material-icons">logout</i>',
          to: "/"
        }
      ]
    }
  ];
}
