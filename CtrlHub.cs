using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace ctrlcmd.Hubs
{
    [HubName("CtrlHub")]
    public class CtrlHub : Hub
    {
        public void Send(string name, string message)
        {
            var context = GlobalHost.ConnectionManager.GetHubContext<CtrlHub>();
            context.Clients.All.addNew(name, message);
        }
    }
}