using ctrlcmd.Hubs;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ctrlcmd.Controllers
{
    public class DeviceController : ApiController
    {
        public class CommandResponse
        {
            public string Success { get; set; }
            public string Message { get; set; }
        }
        [HttpPost]
        public string SetData(string cmd, string controllers)
        {
            CommandResponse response = new CommandResponse();

            try
            {

                string output = "";
                string[] controllersId = controllers.Split(',');

                if (controllersId.Length == 1 && cmd != "")
                {
                    SendCommand(cmd, controllers, ref output);
                }
                else
                {
                    SendBatchCommand(cmd, controllers, ref output);
                }

                response.Success = "true";
                response.Message = output;
            }
            catch (Exception ex)
            {
                response.Success = "false";
                response.Message = "Error processing command.";
            }

            CtrlHub mess = new CtrlHub();
             mess.Send(response.Success, response.Message);

            return JsonConvert.SerializeObject(response);

        }

        private void SendCommand(string cmd, string controllers, ref string output)
        {
            try
            {
                string[] controllersId = controllers.Split(',');

                if (controllersId.Length == 1)
                {
                    controllers = controllersId[0];
                    output = $"controller: {controllers}, command: {cmd}";
                }
                else
                {
                    output = "Error processing command";
                }
            }
            catch (Exception ex)
            {
                output = "Error processing command.";
            }
        }

        private void SendBatchCommand(string cmd, string controllers, ref string output)
        {
            try
            {
                string[] controllersid = controllers.Split(',');
                if (controllersid.Length > 1)
                {
                    controllers = controllersid[1];
                    output = $"controller: {controllers}, command: {cmd}";
                }
                else
                {
                    output = "Error processing command";
                }
            }
            catch (Exception ee)
            {
                output = "Error processing command";
            }
        }

    }
}
