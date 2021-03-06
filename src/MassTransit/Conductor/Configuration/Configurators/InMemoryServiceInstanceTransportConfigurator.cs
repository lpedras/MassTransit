namespace MassTransit.Conductor.Configurators
{
    // ReSharper disable once UnusedType.Global
    public class InMemoryServiceInstanceTransportConfigurator :
        IServiceInstanceTransportConfigurator<IInMemoryReceiveEndpointConfigurator>
    {
        public void ConfigureServiceEndpoint(IInMemoryReceiveEndpointConfigurator configurator)
        {
        }

        public void ConfigureInstanceServiceEndpoint(IInMemoryReceiveEndpointConfigurator configurator)
        {
        }

        public void ConfigureControlEndpoint(IInMemoryReceiveEndpointConfigurator configurator)
        {
        }

        public void ConfigureInstanceEndpoint(IInMemoryReceiveEndpointConfigurator configurator)
        {
        }
    }
}
