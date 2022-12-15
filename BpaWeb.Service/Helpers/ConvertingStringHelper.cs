using System.Text;

namespace BpaWeb.Service
{
  public class ConvertingStringHelper
  {
    public static string ByteArrayToString(byte[] arrInput)
    {
      int i;
      StringBuilder sOutput = new StringBuilder(arrInput.Length);
      for (i = 0; i < arrInput.Length; i++)
      {
        sOutput.Append(arrInput[i].ToString("X2"));
      }
      return sOutput.ToString();
    }
  }
}