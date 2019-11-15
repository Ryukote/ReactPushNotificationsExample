using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace PushApp.Hubs
{
    public class ChatHub : Microsoft.AspNetCore.SignalR.Hub
    {
        private IHubContext<ChatHub> _context;
        public ChatHub(IHubContext<ChatHub> context)
        {
            _context = context;
        }

        public async Task Send(string message)
        {
            var sanader = "";
            await _context.Clients.All.SendAsync("send", "Kurac");
        }
    }
}
