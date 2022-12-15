using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace BpaWeb.Ui.Errors
{
    public class APIValidationErrorResponse : APIResponse
    {
        public APIValidationErrorResponse() : base(400)
        {

        }
        public IEnumerable<string?>? Errors { get; set; }

    }
}
